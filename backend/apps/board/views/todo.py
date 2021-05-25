from rest_framework.permissions import AllowAny

from board.models import Todo
from board.serializers.todo import TodoSerializer
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView


class TodoListView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        queryset = Todo.objects.all().order_by('is_active', '-id')
        serializer = TodoSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TodoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, 201)


class TodoDetailView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, pk):
        instance = get_object_or_404(Todo, id=pk)
        data = TodoSerializer(instance).data
        return Response(data)

    def delete(self, request, pk):
        instance = get_object_or_404(Todo, id=pk)
        instance.delete()
        return Response({}, 204)

    def put(self, request, pk):
        instance = get_object_or_404(Todo, id=pk)
        serializer = TodoSerializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
