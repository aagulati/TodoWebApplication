from rest_framework import serializers
from . models import TodoListModel

class TodoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoListModel
        #fields = {'taskid','taskname'}
        fields='__all__'