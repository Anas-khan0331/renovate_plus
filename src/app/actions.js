'use server';

import { z } from 'zod';

const contactSchema = z.object({
  projectType: z.string().min(1, 'Please select a project type'),
  timeline: z.string().min(1, 'Please select a timeline'),
  budget: z.string().min(1, 'Please select a budget range'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Please enter your address'),
  message: z.string().optional(),
});

const leadMagnetSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function submitContactForm(formData) {
  const raw = {
    projectType: formData.get('projectType'),
    timeline: formData.get('timeline'),
    budget: formData.get('budget'),
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    message: formData.get('message'),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // In production: send to CRM / email service
  // await sendToHubspot(result.data);
  // await sendNotificationEmail(result.data);
  console.log('New consultation request:', result.data);

  return {
    success: true,
    message: 'Thank you! We\'ll be in touch within 2 hours.',
  };
}

export async function submitLeadMagnet(formData) {
  const raw = { email: formData.get('email') };
  const result = leadMagnetSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // In production: add to email list / send PDF
  console.log('Lead magnet signup:', result.data.email);

  return {
    success: true,
    message: 'Your cost guide is on its way!',
  };
}

export async function submitChatForm(formData) {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  if (!raw.name || !raw.email || !raw.message) {
    return { success: false, message: 'All fields are required.' };
  }

  console.log('Chat inquiry:', raw);
  return { success: true, message: 'Got it! We\'ll reply within the hour.' };
}
