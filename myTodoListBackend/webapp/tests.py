# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase, Client
from django.urls import reverse, resolve
from webapp.views import TodoListView
from webapp.models import TodoListModel
import json

# Create your tests here.
class TodoListTestCase(TestCase):
       

    def test_TodoList_urls_is_resolved(self):
        """Todo urls are correctly identified"""     
        # sample to test if testcase is working
        #self.assertEqual(a,1)
        # testing the urls
        url=reverse('TodoList')
        print(resolve(url))
        self.assertEqual(resolve(url).func.view_class,TodoListView)

    def test_TodoList_views_get(self):
        """Todo views are correctly identified"""
        # testing the urls
        client = Client()
        response = client.get(reverse('TodoList'))
        self.assertEqual(response.status_code,200)
        #self.assertTemplateUsed(response,'webapp/todolistmodel.html')
