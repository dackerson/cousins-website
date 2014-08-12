class Program < ActiveRecord::Base
  has_many :program_answers
  has_many :program_questions
  has_many :answers, :through => :program_answers
  has_many :questions, :through => :program_questions
  after_initialize :init

  def init
    self.published = false if self.published.nil?
  end
end
