class RegistrationsController < Devise::RegistrationsController
  def create
    build_resource(sign_up_params)

    resource.save
    yield resource if block_given?
    if resource.persisted?
      if resource.active_for_authentication?
        sign_up(resource_name, resource)
        # respond_with resource, location: after_sign_up_path_for(resource)
        render json: { text: 'OK', resource: 'resource' }, status: 200
      else
        set_flash_message! :notice, :"signed_up_but_#{resource.inactive_message}"
        expire_data_after_sign_in!
        # respond_with resource, location: after_inactive_sign_up_path_for(resource)
        render json: { text: 'Ok' }, status: 422
      end
    else
      clean_up_passwords resource
      set_minimum_password_length
      render json: { text: 'Ok' }, status: 200
    end
  end
end
