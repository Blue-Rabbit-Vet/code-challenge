import ImageUploading from 'react-images-uploading'
import Button from '@mui/material/Button'

interface ImageUploadProps {
    imageState: any[]
    setImageState: (val: any) => void;
}

//Component to allow my to let users upload an image and store it for me to use
const ImageUploadingComponent = (props: ImageUploadProps) => {
    return (
        <ImageUploading
            multiple
            value={props.imageState}
            onChange={(imageList) => props.setImageState(imageList)}
            maxNumber={1}
            dataURLKey="data_url"
        >
            {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
            }) => (
                // write your building UI
                <div className="upload_image-wrapper">
                    <Button className="uploadButton" onClick={onImageUpload} variant='contained'>
                        Upload Image
                    </Button>
                    {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                            <div className="image-item__btn-wrapper">
                                <Button className="update" variant='contained' onClick={() => onImageUpdate(index)}>Update</Button>
                                <Button className="remove" variant='contained' onClick={() => onImageRemove(index)}>Remove</Button>
                            </div>
                            <img className="preview-image" src={image['data_url']} alt="" />
                        </div>
                    ))}
                </div>
            )}
        </ImageUploading>
    )

}


export default ImageUploadingComponent