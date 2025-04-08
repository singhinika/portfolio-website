# How to Add Your Photos

1. Add your photos to this directory (`public/images/photography/`)
2. Create a placeholder error image named `placeholder-error.jpg` (you can use any image editing software to create a simple gray image with text "Image not found")
3. Update the `photos` array in `src/components/Photography.jsx` with your photo information

## Photo Structure
Each photo in the array should follow this format:
```javascript
{
  id: 1,                                    // Unique number for each photo
  src: '/images/photography/your-photo.jpg', // Path to your photo in this directory
  alt: 'Description of the photo',          // Descriptive text for accessibility
  category: 'landscape',                    // One of: 'landscape', 'event', 'film'
  size: 'large'                            // Optional: 'large' (2x2), 'wide' (2x1), 'tall' (1x2), or omit for default (1x1)
}
```

## Example
If you have a photo named `sunset.jpg`, you would add it like this:
```javascript
{
  id: 1,
  src: '/images/photography/sunset.jpg',
  alt: 'Beautiful sunset over the ocean',
  category: 'landscape',
  size: 'wide'
}
```

## Categories
- `landscape`: City and landscape photography
- `event`: Event photography
- `film`: Film photography

## Sizes
- Default (1x1): Regular square tile
- `large` (2x2): Takes up 4 tiles in a square
- `wide` (2x1): Takes up 2 tiles horizontally
- `tall` (1x2): Takes up 2 tiles vertically
