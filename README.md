This was an exercise for 100Devs using APIs.

I chose the Art Institute of Chicago's API, using a search for a keyword and a year.

The ARTIC api is a little tricky. It involves three fetches.

The first is an extensive API that is limited to an output of 12.
From those results I got an `api_link` that gave me an object about one piece of art
There are no images in that data set though. There is a link in that dataset to an `image_id`.
That `image_id` must be plugged into another URL to get the image.

Some bugs:
I'm not quite sure why I cannot manipulate the image size as per the documentation.
I tried two versions of the image url, the images stay the same.

Also, I randomized the results from the first array, so search terms don't always show the same piece of art.

Sometimes if I keep hitting the "get my piece" button, it does not change. This may be a result of a request limiter.

