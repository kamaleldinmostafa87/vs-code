import React from 'react'
import FolderIcon from './SVG/FolderIcon'

type Props = {
    folderName:string
}
function FolderComponent({folderName}:Props) {
  return (
    <div className='flex items-center justify-center'>
    <span className='mr-4'>
      <FolderIcon />
    </span>
    <span> {folderName}</span>
  </div>
  )
}

export default FolderComponent