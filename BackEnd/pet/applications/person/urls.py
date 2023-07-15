from django.urls import path
from .views import MyTokenObtainPairView,RegistrationView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
urlpatterns = [
    path('v1/token/', MyTokenObtainPairView.as_view()),
    path('v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('v1/accounts/register', RegistrationView.as_view(), name='register'),
]
