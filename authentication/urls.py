from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name="register"),
    path('validate-username/',
         csrf_exempt(views.ValidateUsernameView.as_view()),
         name="validate-username"),
    path('validate-email/',
         csrf_exempt(views.ValidateEmailView.as_view()),
         name="validate-email")
]
