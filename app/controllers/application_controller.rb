class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def authenticate
    authenticate_or_request_with_http_basic('asdf') do |user, pass|
      puts "qwer"
      pass_sha1 = Digest::SHA1.hexdigest(pass)
      user == 'admin' && pass_sha1 == 'd033e22ae348aeb5660fc2140aec35850c4da997'
    end
  end
end
