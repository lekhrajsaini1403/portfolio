from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse


def api_root(request):
    return JsonResponse({
        'message': 'Lekhraj Saini Portfolio API',
        'status': 'running',
        'endpoints': {
            'portfolio': '/api/portfolio/',
            'profile': '/api/profile/',
            'publications': '/api/publications/',
            'projects': '/api/projects/',
            'education': '/api/education/',
            'experience': '/api/experience/',
            'awards': '/api/awards/',
            'contact': '/api/contact/',
            'admin': '/admin/',
        }
    })


urlpatterns = [
    path('', api_root, name='api-root'),
    path('admin/', admin.site.urls),
    path('api/', include('portfolio.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
