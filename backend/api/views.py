from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Project, Contact
from .serializers import ProjectSerializer, ContactSerializer


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all().order_by('-id')
    serializer_class = ProjectSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all().order_by('-id')
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        """Create contact and send email notification."""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        contact = serializer.save()
        headers = self.get_success_headers(serializer.data)

        # Send email notification
        try:
            subject = f'New Contact Form Submission from {contact.name}'
            message = f'''
            Name: {contact.name}
            Email: {contact.email}
            Message:
            {contact.message}
            '''
            # Send to your email
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.CONTACT_EMAIL],
                fail_silently=False,
            )
            
            # Send confirmation to the person who submitted the form
            send_mail(
                'Thank you for contacting me',
                'I have received your message and will get back to you soon.',
                settings.DEFAULT_FROM_EMAIL,
                [contact.email],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Error sending email: {e}")
            # Still save the contact but notify about email failure
            return Response({
                "detail": "Message saved but there was an error sending email notification. I'll still receive your message."
            }, status=status.HTTP_201_CREATED, headers=headers)

        return Response({"detail": "Message sent"}, status=status.HTTP_201_CREATED, headers=headers)
