# Increase Upload Max Filesize

Uploading audio or video files can fail if your server has a low upload size limit (e.g. 4M). Here is a quick way to work around this without needing direct access to your server's `php.ini` file.

## How to Increase the Upload Limit

1. Create a new file named `php.ini` (the name and extension are important).

2. Open it with any text editor and paste the following:

```ini
upload_max_filesize = 40M
post_max_size = 40M
```

3. Save the file and upload it to your `wp-admin` folder via FTP.

*Tested on 1&1 and Bluehost.*

If this doesn't work, contact your hosting provider and ask them to increase the `upload_max_filesize` limit.

For more methods, see [this guide by WP Beginner](http://www.wpbeginner.com/wp-tutorials/how-to-increase-the-maximum-file-upload-size-in-wordpress/).
