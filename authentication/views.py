from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from django.contrib.auth.models import User
from validate_email import validate_email
import json


# Create your views here.
class ValidateUsernameView(View):

    def post(self, request):

        data = json.loads(request.body)
        username = data['username']

        if not str(username).isalnum():
            return JsonResponse(
                {'error': 'Username must contain only letters and numbers'})

        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username is taken'})

        return JsonResponse({'success': 'Username is valid'})


class ValidateEmailView(View):

    def post(self, request):

        data = json.loads(request.body)

        email = data['email']

        if not validate_email(email):
            return JsonResponse({'error': 'Email is not valid'})

        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email is taken'})

        return JsonResponse({'success': 'Email is valid'})


class RegisterView(View):

    def get(self, request):
        return render(request, 'register.html')
