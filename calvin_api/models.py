from django.db import models


# Create your models here.
class People(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='')

    class Meta:
        verbose_name = "People"
        verbose_name_plural = "People"

    def __str__(self):
        return self.name
