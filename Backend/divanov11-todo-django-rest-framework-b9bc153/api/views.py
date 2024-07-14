from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer

from .models import User
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'Visited':'/amounts/visited/',
		'Button Clicked':'/amounts/clicked/',
		'Create':'/task-create/',
		'Update':'/task-update/<str:pk>/',
		'Delete':'/task-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def visited(request):
	users = User.objects.all().order_by('-id')
	serializer = UserSerializer(users, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def buttonPressed(request, pk):
	users = User.objects.get(id=pk)
	serializer = UserSerializer(users, many=False)
	return Response(serializer.data)


@api_view(['POST'])
def userCreate(request):
	serializer = UserSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def userUpdate(request, pk):
	user = User.objects.get(id=pk)
	serializer = UserSerializer(instance=user, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def taskDelete(request, pk):
	task = Task.objects.get(id=pk)
	task.delete()

	return Response('Item succsesfully delete!')



