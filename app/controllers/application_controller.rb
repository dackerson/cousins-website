class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  config.encoding = "utf-8"

  def authenticate
    authenticate_or_request_with_http_basic('Administration') do |user, pass|
      pass_sha1 = Digest::SHA1.hexdigest(pass)
      user == 'admin' && pass_sha1 == '59f4a78f1669abaf31f68fc5c300c9e410052503'
    end
  end
end
