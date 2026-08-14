import os
import django
from django.test import RequestFactory
from backend_portfolio.middleware import CorsMiddleware
from django.http import HttpResponse

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend_portfolio.settings')
django.setup()

def get_response(request):
    return HttpResponse("OK")

middleware = CorsMiddleware(get_response)
factory = RequestFactory()
request = factory.get('/api/profiles/', HTTP_ORIGIN='https://apknationporfolio.onrender.com')

response = middleware(request)
print("HEADERS:")
print(response.headers)
