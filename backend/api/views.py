from django.shortcuts import render
from rest_framework import generics
from django.http import JsonResponse


def item_list(request):
    data = {
        'message': 'Hello, this is your API response!'
    }
    return JsonResponse(data)


