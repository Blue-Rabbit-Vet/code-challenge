from django.shortcuts import render, redirect
from calvin_api.models import People
from .forms import AddPerson


# Create your views here.
def index(request):
    people = People.objects.all().values()
    if request.method == 'POST':
        form = AddPerson(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            print(request.FILES)
        return redirect('index')
    else:
        form = AddPerson()
    return render(request, "index.html", {'people': people, 'form': form})
