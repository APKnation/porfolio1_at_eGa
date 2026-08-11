class CorsMiddleware:
    """Permit the Angular development server to call the local API."""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        origin = request.headers.get('Origin')
        if origin in {'http://localhost:4200', 'http://127.0.0.1:4200'}:
            response['Access-Control-Allow-Origin'] = origin
            response['Vary'] = 'Origin'
            response['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
            response['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        return response
