from django.contrib import admin
from django.urls import path, include  # add this
from rest_framework import routers  # add this
from todo import views  # add this
from graphene_django.views import GraphQLView

router = routers.DefaultRouter()  # add this
router.register(r'todos', views.TodoView, 'todo')  # add this

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('graphql/', GraphQLView.as_view(graphiql=True))
]
