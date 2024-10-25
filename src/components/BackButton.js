import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const history = useNavigate()

  return (
    <div className='m-3'>
      <button className='btn btn-primary d-flex' onClick={() => history(-1)}>
      ← Back
      </button>
    </div>
  )
}

export default BackButton
