export function bytesToSize(bytes)
{
    const sizes = ['Bytes', 'KB', 'MB']

    const i = parseInt( Math.floor(Math.log(bytes) / Math.log(1024) ), 10)

    if (i === 0)
        return {size: bytes , unit: sizes[i] }
    else
        return {size: (bytes / (1024 ** i)).toFixed(1) , unit: sizes[i] }
}
