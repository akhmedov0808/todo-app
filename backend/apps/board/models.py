from django.db import models

from core.models import BaseModel


class Todo(BaseModel):
    title = models.CharField(max_length=255)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'todo_todos'
