class AddContactPhoneToProgram < ActiveRecord::Migration
  def change
    add_column :programs, :contact_phone, :string
  end
end
