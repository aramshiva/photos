# Photos
###### https://media.aram.sh/photos
A site to contain my photos! It uses Flickr to store photos and gets image title, EXIF and camera detail info to create a great experience

## Development
Photos is easy to customize for yourself. First change the `PhotosPage` component to include your old and current camera info.

### Data Storage
The app uses two main methods of data storage, you'll need to setup an account for both.
- [Flickr](https://www.flickr.com) and a [Flickr API key](https://www.flickr.com/services/developer/) (note that the API requires their Pro plan and you acknowledge there developer terms)
- [Upstash Redis](https://upstash.com) for storing view counts in a key:value storage (which is added onto Flickr's views)

### Enviornment Values
Put your secrets in an `.env` file. Example enviornment variables can be found below or in `.env.example`.
**Do not commit your enviorment variables.**
```env
FLICKR_KEY=8191c...
FLICKR_SECRET=b18be...
FLICKR_USER=12131232
UPSTASH_REDIS_REST_URL="https://dog-cat-11111.upstash.io"
UPSTASH_REDIS_REST_TOKEN="..."
```

### Local development
First, run the development server on the codebase
```bash
bun dev
```
You can now go to `localhost:3000/photos` to see your app working in development