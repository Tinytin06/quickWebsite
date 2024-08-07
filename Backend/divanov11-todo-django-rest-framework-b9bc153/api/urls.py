from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('amounts/visited/', views.visited, name="user-view"),
    # path('amounts/',views.users, name="user-list"),
	path('amounts/clicked/', views.buttonPressed, name="user-view-button-pressed"),
	path('user-create/', views.userCreate, name="task-create"),

	path('task-update/<str:pk>/', views.userUpdate, name="task-update"),
	path('task-delete/<str:pk>/', views.taskDelete, name="task-delete"),
]
