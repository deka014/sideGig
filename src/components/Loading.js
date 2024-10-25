import React, { useEffect, useState } from 'react'

function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 w-100 position-fixed top-0 start-0">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    );
}

export default Loading;