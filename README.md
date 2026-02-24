# Media
###### https://student.aram.sh/photos
A site to contain my photos

## Data storage
Data for Photos is stored in two places:
- [Flickr](https://www.flickr.com/services/developer/) and there generous API for photo hosting and easy photo uploads.
- [Upstash Redis](https://upstash.com) for view counts (which is added onto Flickr)

## Local development
First, run the development server:
```bash
bun dev
```

Then add an enviornment variable data, example enviornment values can be found below.

### Env
Example enviornment values can be found below.
```env
FLICKR_KEY=8191c...
FLICKR_SECRET=b18be...
FLICKR_USER=12131232
UPSTASH_REDIS_REST_URL="https://dog-cat-11111.upstash.io"
UPSTASH_REDIS_REST_TOKEN="..."
```