from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'index.html')


def add_expense(request):
    return render(request, 'expenses/add-expense.html')