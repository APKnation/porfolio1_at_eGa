class CorsMiddleware:
    """Allow the Angular frontend (dev + production) to call the API."""

    ALLOWED_ORIGINS = {
        'http://localhost:4200',
        'http://127.0.0.1:4200',
        'https://apknationporfolio.onrender.com',
    }

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        origin = request.headers.get('Origin', '')

        # Handle CORS preflight (OPTIONS) requests immediately
        if request.method == 'OPTIONS' and origin in self.ALLOWED_ORIGINS:
            from django.http import HttpResponse
            response = HttpResponse()
            response['Access-Control-Allow-Origin'] = origin
            response['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
            response['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
            response['Access-Control-Max-Age'] = '86400'
            response['Vary'] = 'Origin'
            return response

        response = self.get_response(request)

        if origin in self.ALLOWED_ORIGINS:
            response['Access-Control-Allow-Origin'] = origin
            response['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
            response['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
            response['Vary'] = 'Origin'

        return response
