'use client';

import { useState } from 'react';

interface SecuritySectionProps {
  formData: {
    password: string;
    confirmPassword: string;
    forcePasswordChange: boolean;
    sendWelcomeEmail: boolean;
  };
  onInputChange: (field: string, value: string | boolean) => void;
}

const getPasswordStrength = (password: string) => {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z\d]/.test(password)) strength++;
  return strength;
};

export default function SecuritySection({ formData, onInputChange }: SecuritySectionProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthColors = [
    'bg-gray-200 dark:bg-gray-600',
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-green-500',
  ];
  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong', 'Strong'];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="border-b border-gray-100 dark:border-gray-700 px-6 py-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">lock</span>
        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">
          Security & Account
        </h3>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <label className="flex flex-col w-full gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Temporary Password <span className="text-red-500">*</span>
          </span>
          <div className="relative">
            <input
              className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary focus:ring-primary h-11 px-4 placeholder:text-gray-400 pr-10"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => onInputChange('password', e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              onClick={() => setShowPassword(!showPassword)}
            >
              <span className="material-symbols-outlined text-[20px]">
                {showPassword ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>
          <div className="flex gap-1 mt-1">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full ${
                  index < passwordStrength
                    ? strengthColors[passwordStrength]
                    : 'bg-gray-200 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
          <span
            className={`text-xs ${
              passwordStrength >= 3
                ? 'text-green-600 dark:text-green-400'
                : passwordStrength >= 2
                  ? 'text-yellow-600 dark:text-yellow-400'
                  : 'text-red-600 dark:text-red-400'
            }`}
          >
            {passwordStrength >= 3 ? 'Strong password' : strengthLabels[passwordStrength] || 'Weak password'}
          </span>
        </label>
        <label className="flex flex-col w-full gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Confirm Password <span className="text-red-500">*</span>
          </span>
          <div className="relative">
            <input
              className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary focus:ring-primary h-11 px-4 placeholder:text-gray-400 pr-10"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) => onInputChange('confirmPassword', e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <span className="material-symbols-outlined text-[20px]">
                {showConfirmPassword ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>
          {formData.password && formData.confirmPassword && (
            <span
              className={`text-xs ${
                formData.password === formData.confirmPassword
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {formData.password === formData.confirmPassword
                ? 'Passwords match'
                : 'Passwords do not match'}
            </span>
          )}
        </label>
        <div className="md:col-span-2 pt-2 flex flex-col gap-3">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center">
              <input
                className="peer h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                type="checkbox"
                checked={formData.forcePasswordChange}
                onChange={(e) => onInputChange('forcePasswordChange', e.target.checked)}
              />
            </div>
            <div className="text-sm">
              <span className="font-medium text-gray-900 dark:text-white block group-hover:text-primary transition-colors">
                Force password change on first login
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-xs">
                Recommended for security. The user will be prompted to set their own password immediately.
              </span>
            </div>
          </label>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center">
              <input
                className="peer h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                type="checkbox"
                checked={formData.sendWelcomeEmail}
                onChange={(e) => onInputChange('sendWelcomeEmail', e.target.checked)}
              />
            </div>
            <div className="text-sm">
              <span className="font-medium text-gray-900 dark:text-white block group-hover:text-primary transition-colors">
                Send welcome email
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-xs">
                Includes login link and instructions for setting up 2FA.
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

