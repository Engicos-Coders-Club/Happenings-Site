server {
    listen 80;
    server_name 35.171.19.185;

    location = /favicon.ico { access_log off; log_not_found off; }


    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}