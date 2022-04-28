import React, { useState } from 'react';

function AvatarUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', selectedFile);
    fetch('http://localhost:8080/api/v1/avatar', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        data.data.error ? setError(data.data.error) : setSuccess(true);
      });
  };

  return (
    <div className='form'>
      <span>Upload an avatar:</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='file'
          onChange={(e) => setSelectedFile(e.target.files[0])}
          accept='image/*'
          name='avatar'
        />
        <input type='submit'></input>
      </form>
      {success && <p className='successMsg'>Avatar successfully uploaded.</p>}
      {error && <p className='errorMsg'>Error uploading avatar: {error}</p>}
    </div>
  );
}

export default AvatarUpload;
