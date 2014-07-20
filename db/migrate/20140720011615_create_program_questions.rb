class CreateProgramQuestions < ActiveRecord::Migration
  def change
    create_table :program_questions do |t|
      t.integer :program_id
      t.integer :question_id

      t.timestamps
    end
  end
end
