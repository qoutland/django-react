import graphene
from graphene_django import DjangoObjectType
from .models import Todo


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo


class Query(object):
    all_todos = graphene.List(TodoType)

    def resolve_all_todos(self, info, **kwargs):
        return Todo.objects.all()
