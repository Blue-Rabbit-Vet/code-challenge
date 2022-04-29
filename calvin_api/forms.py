from django.forms import ModelForm
from django import forms
from .models import People


class AddPerson(ModelForm):
    name = forms.CharField(label="Person's name", max_length=50)
    image = forms.ImageField()

    class Meta:
        model = People
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['name'].widget.attrs.update({'placeholder': 'Enter name'})