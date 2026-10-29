from django.shortcuts import render


# Create your views here.

def index(r):
    return render(r, 'index.html')


def course(r):
    return render(r, 'course.html')


def calc(r):
    return render(r, 'calc.html')

def urok(r):
    return render(r, 'urok.html')
