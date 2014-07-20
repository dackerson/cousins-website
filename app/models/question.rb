class Question < ActiveRecord::Base
  has_many :answers
  has_many :program_questions
  has_many :programs, :through => :program_questions
end
