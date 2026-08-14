class CorsMiddleware:
    """Allow the Angular frontend (dev + production) to call the API."""

    def _is_allowed(self, origin):
        if origin in {
            'http://localhost:4200',
            'http://127.0.0.1:4200',
        }:
            return True
        if origin.endswith('.onrender.com'):
            return True
        return False

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        origin = request.headers.get('Origin', '')

        # Handle CORS preflight (OPTIONS) requests immediately
        if request.method == 'OPTIONS' and self._is_allowed(origin):
            from django.http import HttpResponse
            response = HttpResponse()
            response['Access-Control-Allow-Origin'] = origin
            response['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
            response['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
            response['Access-Control-Max-Age'] = '86400'
            response['Vary'] = 'Origin'
            return response

        response = self.get_response(request)

        if self._is_allowed(origin):
            response['Access-Control-Allow-Origin'] = origin
            response['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
            response['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
            response['Vary'] = 'Origin'

        return response
