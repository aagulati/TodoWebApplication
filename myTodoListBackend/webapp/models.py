# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Model for Todo list
class TodoListModel(models.Model):
    taskname=models.CharField(max_length=50)
    taskid=models.IntegerField()
    
    def __str__(self):
        return self.taskname

