'use client'

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useUnloadWarning from '../../customHooks/useUnloadWarning';

export default function Component() {
  const { register, handleSubmit, reset, formState: { errors, isDirty } } = useForm({
    defaultValues: {
      title: '',
      imageUrl: '',
      releaseDate: '',
      accessLevel: 'limited',
      description: ''
    }
  });

  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

 useUnloadWarning(isDirty,reset)

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/designs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) { //status 201
        console.log(response)
        setSubmitStatus({ message: 'Design added successfully!', isError: false });
        reset(); //resets the form fields
      } else {
        throw new Error('Failed to add design');
      }
    } catch (error) {
      console.log('error in adf.jsx',error)
      setSubmitStatus({ message: 'Failed to submit the form. Please try again.', isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Add New Design</h2>
              {submitStatus.message && (
                <div className={`alert ${submitStatus.isError ? 'alert-danger' : 'alert-success'}`} role="alert">
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Design Title</label>
                  <input
                    type="text"
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    id="title"
                    {...register("title", { required: "Title is required" })}
                    disabled={isSubmitting}
                  />
                  {errors.title && <div className="invalid-feedback">{errors.title.message}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="imageUrl" className="form-label">Image URL</label>
                  <input
                    type="text"
                    className={`form-control ${errors.imageUrl ? 'is-invalid' : ''}`}
                    id="imageUrl"
                    {...register("imageUrl", { 
                      required: "Image URL is required",
                      pattern: {
                        value: /^(ftp|http|https):\/\/[^ "]+$/,
                        message: "Invalid URL format"
                      }
                    })}
                    disabled={isSubmitting}
                  />
                  {errors.imageUrl && <div className="invalid-feedback">{errors.imageUrl.message}</div>}
                </div>

                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="releaseDate" className="form-label">Release Date</label>
                    <input
                      type="date"
                      className={`form-control ${errors.releaseDate ? 'is-invalid' : ''}`}
                      id="releaseDate"
                      {...register("releaseDate", { required: "Release Date is required" })}
                      disabled={isSubmitting}
                    />
                    {errors.releaseDate && <div className="invalid-feedback">{errors.releaseDate.message}</div>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="accessLevel" className="form-label">Access Level</label>
                    <select
                      className="form-select"
                      id="accessLevel"
                      {...register("accessLevel")}
                      disabled={isSubmitting}
                    >
                      <option value="limited">Limited</option>
                      <option value="monthly">Monthly</option>
                      <option value="all">All</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    {...register("description")}
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : (
                      'Submit Design'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}