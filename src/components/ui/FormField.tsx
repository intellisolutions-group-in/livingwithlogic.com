'use client';

import { useState } from 'react';
import { ValidationFunction } from '@/utils/validation';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';

interface FormFieldProps {
  id: string;
  name: string;
  type?: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  validation: ValidationFunction;
  required?: boolean;
  autoComplete?: string;
  rows?: number;
  darkMode?: boolean;
}

export default function FormField({
  id,
  name,
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  validation,
  required = true,
  autoComplete,
  rows,
  darkMode = false
}: FormFieldProps) {
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (newValue: string) => {
    onChange(newValue);
    if (touched) {
      const validationError = validation(newValue);
      setError(validationError);
    }
  };

  const handleBlur = () => {
    setTouched(true);
    const validationError = validation(value);
    setError(validationError);
  };

  const isTextarea = type === 'textarea';
  const isPassword = type === 'password';
  const hasError = touched && error;
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  const inputClasses = `
    form-field transition-all duration-300 ${isPassword ? '!pr-14' : ''}
    ${hasError 
      ? 'border-rose-300 bg-rose-50 focus:ring-rose-500 focus:border-rose-500' 
      : 'border-surface-300 bg-white hover:border-surface-400 focus:ring-primary-500 focus:border-primary-500'
    }
  `.trim();

  return (
    <div>
      <label htmlFor={id} className={`form-label ${darkMode ? '!text-white' : ''}`}>
        {label}
        {required && <span className="text-rose-500 ml-1">*</span>}
      </label>
      
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
          rows={rows || 4}
          className={inputClasses}
          aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={hasError ? `${id}-error` : undefined}
        />
      ) : (
        <div className="relative">
          <input
            id={id}
            name={name}
            type={inputType}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={handleBlur}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            className={inputClasses}
            aria-invalid={hasError ? 'true' : 'false'}
            aria-describedby={hasError ? `${id}-error` : undefined}
          />
          {isPassword && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={`absolute inset-y-0 right-0 w-12 flex items-center justify-center focus:outline-none transition-colors duration-200 z-20 rounded-r-xl ${
                darkMode 
                  ? 'text-surface-600 hover:text-surface-800' 
                  : 'text-surface-500 hover:text-surface-700'
              }`}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              tabIndex={0}
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          )}
        </div>
      )}

      {hasError && (
        <div id={`${id}-error`} className="mt-2 flex items-center space-x-2 text-rose-600" role="alert">
          <AlertCircle size={16} className="flex-shrink-0" />
          <span className="form-error">{error}</span>
        </div>
      )}
    </div>
  );
}
