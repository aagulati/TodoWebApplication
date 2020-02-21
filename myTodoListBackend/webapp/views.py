# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . models import TodoListModel
from . serializer import TodoListSerializer
from rest_framework import generics
#from rest_framework.permissions import IsAdminUser

# Create your views here.
class TodoListView(generics.ListCreateAPIView):

    queryset = TodoListModel.objects.all()
    #permission_classes = [IsAdminUser]
    serializer_class = TodoListSerializer

    def get(self, request):
        task1 = TodoListModel.objects.all()
        serializer = TodoListSerializer(task1, many=True)
        return Response(serializer.data)


    #def post(self, request, *args, **kwargs):
    #    print >>sys.stderr, 'Goodbye, cruel world!'
    #    serializer = TodoListSerializer(data=request.data)
    #    if serializer.is_valid():
    #        serializer.save()
    #        return Response(serializer.data, status=status.HTTP_201_CREATED)
    #    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

