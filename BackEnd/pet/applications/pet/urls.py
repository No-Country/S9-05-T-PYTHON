from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
# Views
from . import views

app_name = 'pet_app'

urlpatterns = [
    path(
        'api/list/',
        views.PetListApiView.as_view(),
    ),
    path(
        'api/create/',
        views.PetCreateApiView.as_view(),
    ),
    path(
        'api/retri/<pk>/',
        views.PetRetriApiView.as_view(),
    ),
    path(
        'api/destroy/<pk>/',
        views.PetDestroyApiView.as_view(),
    ),
    path(
        'api/update/<pk>/',
        views.PetUpdateApiView.as_view(),
    ),


]+ static (settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
                                                                                                                            