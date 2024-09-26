<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => ['required', 'max:255'],
            "username" => ['required'],
            "email" => ['required', 'max:255', 'email'],
            "password" => ['required', 'confirmed'],
            "gender" => ['in:female,male'],
            "phone" => ['required'],
            "month" => ['required'],
            "day" => ['required'],
            "year" => ['required'],
            "photo" => ['nullable', 'image', 'mimes:png,jpg,jpeg,webp']
        ];
    }
}
