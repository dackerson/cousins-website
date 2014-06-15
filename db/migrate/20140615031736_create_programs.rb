class CreatePrograms < ActiveRecord::Migration
  def change
    create_table :programs do |t|
      t.text :name
      t.text :desc
      t.text :website

      t.timestamps
    end
  end
end
