class AddQuestionGetListedToQuestions < ActiveRecord::Migration
  def change
    add_column :questions, :question_get_listed, :text
  end
end
