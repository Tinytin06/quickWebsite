# Generated by Django 3.0.3 on 2024-07-16 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20240715_1707'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='pressed',
            field=models.BigIntegerField(default=0),
        ),
    ]
