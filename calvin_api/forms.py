from django.forms import ModelForm
from django import forms
from .models import People


class AddPerson(ModelForm):
    name = forms.CharField(label="Person's name", max_length=50)
    image = forms.ImageField()

    class Meta:
        model = People
        fields = "__all__"
